// Imports
import { TemplateRoot } from "./TemplateRoot.ts";

Deno.test("create root document", async () => {
	const root = new TemplateRoot({});
	if (!TemplateRoot.isTemplate(root))
		throw new Error("Not a template!");
});

Deno.test("invalid object tested in isTemplate()", async () => {
	if (TemplateRoot.isTemplate({}))
		throw new Error("Not a valid template!");
});

Deno.test("extended template root document", async () => {
	class ExtendedTemplateRoot extends TemplateRoot<any>{}
	const root = new ExtendedTemplateRoot({});
	if (!TemplateRoot.isTemplate(root))
		throw new Error("Not a template!");
});
