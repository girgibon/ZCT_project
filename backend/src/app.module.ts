import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";

@Module ({
    controllers: [],
    providers: [],
    imports: [
        
        SequelizeModule.forRoot({
          dialect: 'mongodb',
          host: 'zct.cluster-cps66m0cw888.eu-central-1.docdb.amazonaws.com', 
          port: 27017, 
          username: 'mongodb',
          password: 'rootroot',
          database: 'zct',
          models: [User, Role, UserRoles, Post],
          autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
      ],
})
export class AppModule {}
