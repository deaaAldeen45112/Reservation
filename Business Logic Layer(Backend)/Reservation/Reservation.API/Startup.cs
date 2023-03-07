using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using Reservation.Infra.Common;
using Reservation.Infra.Repository;
using Reservation.Infra.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reservation.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IDbContext, DbContext>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<IEmployeeService, EmployeeService>();
            services.AddScoped<ICustomerRepository, CustomerRepository>();
            services.AddScoped<ICustomerService, CustomerService>();
            services.AddScoped<IJWTRepository, JWTRepository>();
            services.AddScoped<IJWTService, JWTService>();
            services.AddScoped<ITableRepository, TableRepository>();
            services.AddScoped<ITableService, TableService>();
            services.AddScoped<IRegisterRepository, RegisterRepository>();
            services.AddScoped<IRegisterService, RegisterService>();
            services.AddScoped<ICartItemRepository, CartItemRepository>();
            services.AddScoped<ICartItemService, CartItemService>();
            services.AddScoped<ICreditRepositroy, CreditRepository>();
            services.AddScoped<ICreditService, CreditService>();
            services.AddScoped<IMenuCategoryRepositroy, MenuCategoryRepository>();
            services.AddScoped<IMenuCategoryService, MenuCategoryService>();
            services.AddScoped<IAboutUsRepository, AboutUsRepository>();
            services.AddScoped<IAboutUsService, AboutUsService>();
            services.AddScoped<IContactUsRepository, ContactUsRepository>();
            services.AddScoped<IContactUsService, ContactUsService>();
            services.AddScoped<IContactUsInfoRepository, ContactUsInfoRepository>();
            services.AddScoped<IContactUsInfoService, ContactUsInfoService>();
            services.AddScoped<IHeaderRepository, HeaderRepository>();
            services.AddScoped<IHeaderService, HeaderService>();
            services.AddScoped<IFooterRepository, FooterRepository>();
            services.AddScoped<IFooterService, FooterService>();
            services.AddScoped<ISysImageRepository, SysImageRepository>();
            services.AddScoped<ISysImageService, SysImageService>();
            services.AddScoped<IMenuItemRepositroy, MenuItemRepository>();
            services.AddScoped<IMenuItemService, MenuItemService>();
            services.AddScoped<IMenuItemDiscount, MenuItemDiscountRepository>();
            services.AddScoped<IMenuItemDiscountService, MenuItemDiscountService>();
            services.AddScoped<IMenuItemReviewRepositroy, MenuItemReviewRepository>();
            services.AddScoped<IMenuItemReviewService, MenuItemReviewService>();
            services.AddScoped<IOrderItemRepositroy, OrderItemRepository>();
            services.AddScoped<IOrderItemService, OrderItemService>();
            services.AddScoped<IOrderRepositroy, OrderRepository>();
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IPaymentMethodRepositroy, PaymentMethodRepository>();
            services.AddScoped<IPaymentMethodService, PaymentMethodService>();
            services.AddScoped<IPaymentRepositroy, PaymentRepository>();
            services.AddScoped<IPaymentService, PaymentService>();
            services.AddScoped<ITestimonailRepositroy, TestimonialRepository>();
            services.AddScoped<ITestimonialService, TestimonialService>();
            services.AddScoped<IWaiterRepositroy, WaiterRepository>();
            services.AddScoped<IWaiterService, WaiterService>();
            services.AddScoped<IReservationRepositroy, ReservationRepository>();
            services.AddScoped<IReservationService, ReservationService>();
            services.AddScoped<IRoleRepositroy, RoleRepository>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<ICartRepository, CartRepository>();
            services.AddScoped<ICartService,CartService>();
            services.AddScoped<IIndexRepository, IndexRepository>();
            services.AddScoped<IIndexService, IndexService>();

      services.AddControllers();
            
            services.AddCors(corsOptions =>
            {
                corsOptions.AddPolicy("x",
                 builder =>
                 {
                     builder.WithOrigins("http://127.0.0.1:1:4200", "http://localhost:4200", "https://localhost:4200")
                     .AllowAnyHeader().AllowAnyMethod();
                     builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                 });
            });
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(y =>
            {
                y.RequireHttpsMetadata = false;
                y.SaveToken = true;
                y.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("[123456789123456789123456789123456789]")),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    RoleClaimType= "roleId"
                };
            });
        }
    

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors("x");
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
