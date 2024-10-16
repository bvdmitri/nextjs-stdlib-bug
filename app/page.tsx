
import { beta } from '@stdlib/stats-base-dists';

export default function Home() {
  const result = new beta.Beta(5, 5).quantile(0.5);
  return <div>{result}</div>;
}
