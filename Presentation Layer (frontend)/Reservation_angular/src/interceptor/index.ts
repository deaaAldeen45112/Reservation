import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./error.interceptor";
import { Tokeninterceptor } from "./token.interceptor";

export const  httpInterceptorProvider=
  [
     
{provide:HTTP_INTERCEPTORS,
useClass:Tokeninterceptor,
multi:true
},
{provide:HTTP_INTERCEPTORS,
useClass:ErrorInterceptor,
multi:true
}
  ]
