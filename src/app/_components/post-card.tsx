import Link from 'next/link';

export function PostCard({ id, name, date } : { id : number, name: string; date: Date }) {
    return(
        <Link href={`/post/${id}`}>
            <div className="justify-between flex flex-col w-60 h-40 border-2 
                border-gray-300 rounded p-4 gap-4 cursor-pointer hover:bg-gray-300">
                <h4>{name}</h4>
                <p>{date.toLocaleDateString("pt-BR")}</p>
            </div>
        </Link>
    );
}