"use client";

import Link from "next/link";

export default function Error() {
    return (
        <div className="bg-black-500 flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white-800">404</h1>
                <p className="text-xl text-gray-500 mt-4">
                    페이지를 찾을 수 없습니다.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-block px-6 py-3 text-white bg-gray-600 rounded-lg hover:bg-gray-700"
                >
                    홈으로 돌아가기
                </Link>
            </div>
        </div>
    );
}
