// Shared interface every model-provider adapter implements, so main.ts can
// call whichever one the user picked in Settings without knowing anything
// about its request/response shape. CLI mode is unaffected by this - it
// always shells out to the `claude` binary regardless of provider choice,
// since it's inherently tied to Claude Code, not something to generalize.

export interface LlmTool {
	name: string;
	description: string;
	input_schema: Record<string, unknown>;
}

export class LlmApiError extends Error {
	status: number;
	body: string;

	constructor(message: string, status: number, body: string) {
		super(message);
		this.name = "LlmApiError";
		this.status = status;
		this.body = body;
	}
}

export interface AttachmentInput {
	kind: "image" | "document"; // "document" is currently PDF-only
	mediaType: string; // e.g. "image/png" or "application/pdf"
	base64Data: string;
}

// Bundled rather than two positional params so a caller wanting maxTokens
// without an attachment doesn't have to write callTool(sys, msg, tool, undefined, 8192).
export interface LlmMessage {
	text: string;
	attachment?: AttachmentInput;
}

export interface LlmProvider {
	callTool<T>(
		system: string,
		message: LlmMessage,
		tool: LlmTool,
		maxTokens?: number
	): Promise<T>;
}
