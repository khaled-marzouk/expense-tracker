import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import schema from "./schema";
const sql = neon(
	"postgresql://neondb_owner:7grRo6tFvBIc@ep-raspy-union-a5zdic42.us-east-2.aws.neon.tech/expesnse-tracker?sslmode=require"
);
export const db = drizzle(sql, { schema });
