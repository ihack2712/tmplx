// Imports
import type { IEngine } from "./remote.ts";
import { TemplateRoot } from "./remote.ts";

/**
 * The TemplateX Document Core.
 */
export class Core<Engine extends IEngine> extends TemplateRoot<Engine>
{
	
	/** The TemplateX Document Core version. */
	public static readonly documentCoreVersion: string = "0.1.0";
	
	/** The TemplateX Document version. */
	public static readonly documentVersion: string = "0.1.0";
	
	/** The engine versions supported by the template. */
	public static readonly engineVersionSupport: string = ">= 0.1.0";
	
	/**
	 * Check if a value uses this core object.
	 * @param value The value.
	 */
	public static usesCore (value: any): boolean
	{
		return value instanceof Core;
	}
	
	// ----
	
	/**
	 * Initiate a new template core.
	 * @param engine The engine object.
	 */
	public constructor(engine: Engine)
	{
		super(engine);
	}
	
	/**
	 * Get the document core version.
	 */
	public getDocumentCoreVersion (): string
	{
		return Core.documentCoreVersion;
	}
	
	/**
	 * Get the document version.
	 */
	public getDocumentVersion (): string
	{
		return (this as any).constructor.documentVersion || Core.documentVersion;
	}
	
	/**
	 * Get the engine version support.
	 */
	public getEngineVersionSupport (): string
	{
		return (this as any).constructor.engineVersionSupport || Core.engineVersionSupport;
	}
}
