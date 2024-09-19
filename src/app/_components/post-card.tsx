export function PostCard( { name, date }: { name: string; date: Date } ) {
    return(
        <div className="flex flex-col w-50 h-40 border-2 border-gray-300 rounded">
            <h4>{name}</h4>
            <p>{date.toLocaleDateString("pt-BR")}</p>
        </div>
    );
}