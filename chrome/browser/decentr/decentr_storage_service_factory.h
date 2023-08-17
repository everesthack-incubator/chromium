#ifndef CHROME_BROWSER_DECENTR_DECENTR_STORAGE_SERVICE_FACTORY_H_
#define CHROME_BROWSER_DECENTR_DECENTR_STORAGE_SERVICE_FACTORY_H_

#include "base/memory/singleton.h"
#include "components/keyed_service/content/browser_context_keyed_service_factory.h"

namespace user_prefs {
class PrefRegistrySyncable;
}

namespace tomi {

class TomiStorageService;

class TomiStorageServiceFactory
    : public BrowserContextKeyedServiceFactory {
public:
    TomiStorageServiceFactory(const TomiStorageServiceFactory&) = delete;
    TomiStorageServiceFactory& operator=( const TomiStorageServiceFactory&) = delete;

    static TomiStorageService* GetForBrowserContext(content::BrowserContext* context);
    static TomiStorageServiceFactory* GetInstance();

private:
    friend struct base::DefaultSingletonTraits<TomiStorageServiceFactory>;

    TomiStorageServiceFactory();
    ~TomiStorageServiceFactory() override;

    // BrowserContextKeyedServiceFactory:
    KeyedService* BuildServiceInstanceFor(content::BrowserContext* context) const override;
    void RegisterProfilePrefs(user_prefs::PrefRegistrySyncable* registry) override;
    bool ServiceIsCreatedWithBrowserContext() const override;
};

}  // namespace tomi

#endif  // CHROME_BROWSER_DECENTR_DECENTR_STORAGE_SERVICE_FACTORY_H_