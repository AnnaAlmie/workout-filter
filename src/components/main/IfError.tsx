interface IProps {
    error: string,
    setInnerData: () => void
}
export default function IfError({ error, setInnerData }: IProps) {
    return (
        <div className="container">
            <div>
                <b>Error type:</b> {error}
            </div>
            <br />
            <div>
                Якщо ви побачили цю помилку, то скоріш за все безкоштовна версія supabase призупинила свою роботу.
            </div>
            <div>
                Але ви можете подивитись варіант з json файлу
            </div>
            <button onClick={setInnerData}>Завантажити</button>
        </div>
    )
}
