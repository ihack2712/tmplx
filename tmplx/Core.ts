// Imports
import type { IEngine } from "./IEngine.ts";

/**
 * The TemplateX Document Core.
 */
export default class Core <Engine extends IEngine>
{
	
	/** The TemplateX Document Core version. */
	public static readonly documentCoreVersion: string = "0.1.0";
	
	/** The TemplateX Document version. */
	public static readonly documentVersion: string = "0.1.0";
	
	/** The engine versions supported by the template. */
	public static readonly engineVersionSupport: string = ">= 0.1.0";
	
}
