import ".//static/styles.scss"
import Boy from "./Boy"
import TableContent from "./Table";

export default function Home() {
    return (
        <div className="table">
            <Boy />
            <TableContent />
        </div>
    );
}
