import { supabase } from "@/app/api/supabase";
import { validateBody, validateHeaders } from "@/utils/server/validate";
export async function POST(request: Request) {
    try {
        if (!validateHeaders(request)) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401,
                headers: { "Content-Type": "application/json" },
            });
        }

        const body = await request.json();
        if (!validateBody(body, ["title", "descibe"])) {
            return new Response(
                JSON.stringify({ error: "Bad Request: Missing fields" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const { title, descibe } = body;

        const { error: insertError } = await supabase
            .from("category")
            .insert([{ title, descibe }]);

        if (insertError) {
            console.error("카테고리 저장 실패:", insertError.message);
            return new Response(
                JSON.stringify({ error: "Failed to save category" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({
                result: "Y",
                message: "카테고리 추가 성공",
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.log("카테고리 추가 실패 : " + error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function PATCH(request: Request) {
    try {
        if (!validateHeaders(request)) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401,
                headers: { "Content-Type": "application/json" },
            });
        }

        const body = await request.json();
        if (!validateBody(body, ["id", "title", "descibe"])) {
            return new Response(
                JSON.stringify({ error: "Bad Request: Missing fields" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const { id, title, descibe } = body;

        const { error } = await supabase
            .from("category")
            .update({ title, descibe })
            .eq("id", id);

        if (error) {
            console.error("카테고리 수정 실패:", error.message);
            return new Response(
                JSON.stringify({ error: "Failed to update category" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify({ message: "카테고리 수정 성공" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.log("카테고리 수정 실패 : " + error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        if (!validateHeaders(request)) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401,
                headers: { "Content-Type": "application/json" },
            });
        }

        const body = await request.json();
        if (!validateBody(body, ["id"])) {
            return new Response(
                JSON.stringify({ error: "Bad Request: Missing fields" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const { id } = body;
        const { error } = await supabase.from("category").delete().eq("id", id);

        if (error) {
            console.error("카테고리 삭제 실패:", error.message);
            return new Response(
                JSON.stringify({ error: "Failed to delete category" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify({ message: "카테고리 삭제 성공" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.log("카테고리 삭제 실패 : " + error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
