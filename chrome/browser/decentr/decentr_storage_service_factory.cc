#include "chrome/browser/tomi/tomi_storage_service_factory.h"

#include <memory>

#include "components/tomi/tomi_storage_service.h"
#include "components/keyed_service/content/browser_context_dependency_manager.h"
#include "base/memory/singleton.h"
#include "content/public/browser/browser_context.h"
#include "content/public/browser/storage_partition.h"
#include "components/pref_registry/pref_registry_syncable.h"
#include "components/user_prefs/user_prefs.h"

namespace tomi {

// static
TomiStorageService* TomiStorageServiceFactory::GetForBrowserContext(content::BrowserContext* context) {
    return static_cast<TomiStorageService*>(GetInstance()->GetServiceForBrowserContext(context, true));
}

// static
TomiStorageServiceFactory* TomiStorageServiceFactory::GetInstance() {
    return base::Singleton<TomiStorageServiceFactory>::get();
}

TomiStorageServiceFactory::TomiStorageServiceFactory()
    : BrowserContextKeyedServiceFactory("TomiStorageService", BrowserContextDependencyManager::GetInstance()) {}

TomiStorageServiceFactory::~TomiStorageServiceFactory() {}

KeyedService* TomiStorageServiceFactory::BuildServiceInstanceFor(content::BrowserContext* context) const {
    auto url_loader_factory = context->GetDefaultStoragePartition()->GetURLLoaderFactoryForBrowserProcess();
    auto tomi_storage_service = std::make_unique<TomiStorageService>(context->GetPath().Append(FILE_PATH_LITERAL("tomi_storage_db")));
    return tomi_storage_service.release();
}

void TomiStorageServiceFactory::RegisterProfilePrefs(user_prefs::PrefRegistrySyncable* registry) {
    TomiStorageService::RegisterProfilePrefs(registry);
}

bool TomiStorageServiceFactory::ServiceIsCreatedWithBrowserContext() const {
  return true;
}

}  // namespace tomi
