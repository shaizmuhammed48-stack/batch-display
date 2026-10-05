import { Batch } from "@/data/batches";

interface Props {
  batch: Batch;
  index: number;
}

export default function BatchCard({ batch, index }: Props) {
  return (
    <div className={`batch-card ${batch.cls}`} id={`batch-card-${index}`}>
      <h2>📚 {batch.name}</h2>
      <div className="batch-time">🕒 {batch.time}</div>
      <ul>
        {batch.students.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
