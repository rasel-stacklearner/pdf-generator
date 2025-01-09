import { db } from "@repo/db/db-client";
import { InvoiceTable, InvoiceItemTable, type Invoice, type NewInvoice, type UpdateInvoice, type NewInvoiceItem } from "@repo/db/invoice";
import { eq } from "drizzle-orm";


// Repository Implementation
export class InvoiceRepository {

  async create(data: NewInvoice) {
    const [invoice] = await db
      .insert(InvoiceTable)
      .values(data)
      .returning();
    return invoice;
  }

  async createItems(items: NewInvoiceItem[]) {

    const [invoiceItems] = await db.insert(InvoiceItemTable).values(items).returning();

    return invoiceItems;

  }

  async findById(id: number) {
    return await db.query.InvoiceTable.findFirst({
      where: eq(InvoiceTable.id, id),
      with: {
        items: true
      }
    });
  }

  async findAll(): Promise<Invoice[]> {
    return await db.query.InvoiceTable.findMany({
      with: {
        items: true
      }
    });
  }

  async update(id: number, data: UpdateInvoice) {
    const [invoice] = await db
      .update(InvoiceTable)
      .set(data)
      .where(eq(InvoiceTable.id, id))
      .returning();
    return invoice;
  }

  async delete(id: number) {
    await db
      .delete(InvoiceTable)
      .where(eq(InvoiceTable.id, id));
  }

  async deleteItems(invoiceId: number) {
    await db
      .delete(InvoiceItemTable)
      .where(eq(InvoiceItemTable.invoiceId, invoiceId));
  }
}
