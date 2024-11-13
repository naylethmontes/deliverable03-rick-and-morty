import ResidentCard from './ResidentCard';
import '../styles/ResidentList.css';

function ResidentsList({ residents }) {
	return (
		<div className="cards">
			{residents?.map((resident) => {
				const residentSplit = resident.split('/');
				const id = residentSplit[residentSplit.length - 1];
				return <ResidentCard key={id} url={resident} />;
			})}
		</div>
	);
}

export default ResidentsList;
