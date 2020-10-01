// Imports
import type { Command } from "../vendors/cliffy/command.ts";

/**
 * An engine interface.
 */
export interface IEngine
{
	
	/** Get the engine version. */
	getEngineVersion (): string;
	
	/**
	 * Inject commands onto the Command-Iine Interface.
	 * @param commands The commands to inject.
	 */
	command (...commands: Command[]): IEngine;
	
}
