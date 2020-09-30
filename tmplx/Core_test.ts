// Imports
import { Core } from "./Core.ts";
import { TemplateRoot } from "./remote.ts";

Deno.test("core extends root and core.", async () => {
	const core = new Core({});
	if (!TemplateRoot.isTemplate(core))
		throw new Error("core template is not a template.");
	if (!Core.usesCore(core))
		throw new Error("core template doesn't use the core object.");
});

Deno.test("core version methods", async () => {
	const core = new Core({});
	if (core.getDocumentCoreVersion() !== Core.documentCoreVersion)
		throw new Error("Core version mismatch.");
	if (core.getDocumentVersion() !== Core.documentVersion)
		throw new Error("Version mismatch.");
	if (core.getEngineVersionSupport() !== Core.engineVersionSupport)
		throw new Error("Engine version support mismatch.");
});

Deno.test("extended core", async () => {
	class ExtendedCore extends Core<any> {}
	const core = new ExtendedCore({});
	if (!TemplateRoot.isTemplate(core))
		throw new Error("core template is not a template.");
	if (!Core.usesCore(core))
		throw new Error("core template doesn't use the core object.");
});

Deno.test("extended core version methods", async () => {
	class ExtendedCore extends Core<any> {}
	const core = new ExtendedCore({});
	if (core.getDocumentCoreVersion() !== Core.documentCoreVersion)
		throw new Error("Core version mismatch.");
	if (core.getDocumentVersion() !== Core.documentVersion)
		throw new Error("Version mismatch.");
	if (core.getEngineVersionSupport() !== Core.engineVersionSupport)
		throw new Error("Engine version support mismatch.");
});

Deno.test("extended core overrides version methods", async () => {
	class ExtendedCore extends Core<any>
	{
		public static readonly documentCoreVersion: string = "changed";
		public static readonly documentVersion: string = "changed";
		public static readonly engineVersionSupport: string = "changed";
	}
	const core = new ExtendedCore({});
	if (core.getDocumentCoreVersion() !== Core.documentCoreVersion)
		throw new Error("Core version overriden.");
	if (core.getDocumentVersion() !== ExtendedCore.documentVersion)
		throw new Error("Version mismatch.");
	if (core.getEngineVersionSupport() !== ExtendedCore.engineVersionSupport)
		throw new Error("Engine version support mismatch.");
});

