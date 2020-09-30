/**
 * The TemplateX Document Root object.
 */
export class TemplateRoot
{
	
	/**
	 * Check whether or not a value is a template.
	 * @param value The value.
	 */
	public static isTemplate (value: any): boolean
	{
		return value instanceof TemplateRoot;
	}
	
}
