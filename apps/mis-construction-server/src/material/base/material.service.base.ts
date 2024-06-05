/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Material as PrismaMaterial } from "@prisma/client";

export class MaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MaterialCountArgs, "select">): Promise<number> {
    return this.prisma.material.count(args);
  }

  async materials<T extends Prisma.MaterialFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaterialFindManyArgs>
  ): Promise<PrismaMaterial[]> {
    return this.prisma.material.findMany<Prisma.MaterialFindManyArgs>(args);
  }
  async material<T extends Prisma.MaterialFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaterialFindUniqueArgs>
  ): Promise<PrismaMaterial | null> {
    return this.prisma.material.findUnique(args);
  }
  async createMaterial<T extends Prisma.MaterialCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaterialCreateArgs>
  ): Promise<PrismaMaterial> {
    return this.prisma.material.create<T>(args);
  }
  async updateMaterial<T extends Prisma.MaterialUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaterialUpdateArgs>
  ): Promise<PrismaMaterial> {
    return this.prisma.material.update<T>(args);
  }
  async deleteMaterial<T extends Prisma.MaterialDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaterialDeleteArgs>
  ): Promise<PrismaMaterial> {
    return this.prisma.material.delete(args);
  }
}
