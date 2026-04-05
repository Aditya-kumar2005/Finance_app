import InCard from './InCard';
import MoChart from './MoChart';
import Empty from './Empty';
import useInsights from './useInsights'


export default function InsTab() {
  const ins=useInsights();
    return (
        <div className="fu">
            {ins.length?(
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 st">
                    {ins.map(i=><InCard key={i.label} ins={i}/>)}
                </div>
            ):<Empty/>}
            <MoChart/>
        </div>
    );
}
