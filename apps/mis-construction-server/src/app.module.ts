import { Module } from "@nestjs/common";
import { RoleModule } from "./role/role.module";
import { ProjectModule } from "./project/project.module";
import { SiteModule } from "./site/site.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { ExpenseModule } from "./expense/expense.module";
import { MaterialModule } from "./material/material.module";
import { UserModule } from "./user/user.module";
import { LedgerModule } from "./ledger/ledger.module";
import { DocumentModule } from "./document/document.module";
import { PaymentVoucherModule } from "./paymentVoucher/paymentVoucher.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    RoleModule,
    ProjectModule,
    SiteModule,
    InvoiceModule,
    ExpenseModule,
    MaterialModule,
    UserModule,
    LedgerModule,
    DocumentModule,
    PaymentVoucherModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
