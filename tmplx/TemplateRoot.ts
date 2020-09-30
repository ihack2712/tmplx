// Imports
import { IEngine } from "./remote.ts";

/**
 * The TemplateX Document Root object.
 */
export class TemplateRoot <Engine extends IEngine>
{
	
	/**
	 * Check whether or not a value is a template.
	 * @param value The value.
	 */
	public static isTemplate (value: any): boolean
	{
		return value instanceof TemplateRoot;
	}
	
	/**
	 * Initiate the template root.
	 * @param engine The engine object.
	 */
	public constructor (public readonly engine: Engine)
	{
		
	}
	
}
