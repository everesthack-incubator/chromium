#include "components/tomi/tomi_storage_service.h"
#include "extensions/browser/event_router.h"
#include "extensions/common/api/tomi.h"

#include <memory>

namespace extensions {
namespace api {
using TomiStorageServiceFactory = ::tomi::TomiStorageServiceFactory;
using TomiStorageService = ::tomi::TomiStorageService;

ExtensionFunction::ResponseAction TomiGetFunction::Run() {
  std::unique_ptr<tomi::Get::Params> params(
      tomi::Get::Params::Create(args()));
  EXTENSION_FUNCTION_VALIDATE(params.get());

  auto* pTomi_storage = static_cast<TomiStorageService*>(
      TomiStorageServiceFactory::GetForBrowserContext(browser_context()));
  pTomi_storage->Get(params->key,
                        base::BindOnce(&TomiGetFunction::OnGet, this));

  return RespondLater();
}

void TomiGetFunction::OnGet(std::pair<std::string, std::string> object) {
  auto [key, value] = std::move(object);

  base::Value dict(base::Value::Type::DICTIONARY);
  dict.SetStringKey(std::move(key), std::move(value));

  Respond(OneArgument(base::Value(std::move(dict))));
}

ExtensionFunction::ResponseAction TomiSetFunction::Run() {
  std::unique_ptr<tomi::Set::Params> params(
      tomi::Set::Params::Create(args()));
  EXTENSION_FUNCTION_VALIDATE(params.get());

  auto* pTomi_storage = static_cast<TomiStorageService*>(
      TomiStorageServiceFactory::GetForBrowserContext(browser_context()));
  pTomi_storage->Set(
      {params->data.key, params->data.value});

  auto* event_router = extensions::EventRouter::Get(browser_context());

  std::unique_ptr<extensions::Event> event(new extensions::Event(
      extensions::events::DECENTR_ON_CHANGED,
      extensions::api::tomi::OnChanged::kEventName,
      extensions::api::tomi::OnChanged::Create(
          params->data.key)));
  event_router->BroadcastEvent(std::move(event));

  return RespondNow(NoArguments());
}

}  // namespace api
}  // namespace extensions
