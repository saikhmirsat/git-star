export default function Pagination({ current, onChange, total }) {
    const Prev = <button className={current === 1 ? "disBTN" : "norBTN"} disabled={current === 1} onClick={() => onChange(current - 1)}>Prev</button>
    const Next = <button className={current === 1 ? "disBTN" : "norBTN"} disabled={current === total} onClick={() => onChange(current + 1)}>Next</button>
    const Page = new Array(total).fill(0).map((ele, ind) => <button onClick={() => onChange(ind + 1)} className={ind + 1 === current ? "myBTN" : "youBTN"}>{ind + 1}</button>)
    // disabled={current === (ind + 1)}
    return <span>{Prev}{Page}{Next}</span>
}