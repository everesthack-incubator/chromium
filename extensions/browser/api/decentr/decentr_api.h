#ifndef EXTENSIONS_API_DECENTR_DECENTR_API_H_
#define EXTENSIONS_API_DECENTR_DECENTR_API_H_

#include <stddef.h>

#include "extensions/browser/extension_function.h"

namespace extensions {
namespace api {
  
class TomiGetFunction
    : public ExtensionFunction {
 public:
  DECLARE_EXTENSION_FUNCTION("tomi.get", DECENTR_GET)

 protected:
  ~TomiGetFunction() override {}

  ResponseAction Run() override;
 private:
  void OnGet(std::pair<std::string, std::string>);
};

class TomiSetFunction
  : public ExtensionFunction {
 public:
  DECLARE_EXTENSION_FUNCTION("tomi.set", DECENTR_SET)

 protected:
  ~TomiSetFunction() override {}

  ResponseAction Run() override;
};

}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_API_DECENTR_DECENTR_API_H_
