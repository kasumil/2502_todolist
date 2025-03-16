function validateHeaders(request: Request): boolean {
    const authHeader = request.headers.get("Authorization");
    return authHeader !== null && authHeader.startsWith("Bearer ");
}

function validateBody(body: any, requiredFields: string[]): boolean {
    return requiredFields.every((field) => field in body);
}

export { validateBody, validateHeaders };
