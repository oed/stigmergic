import { useComposeDB } from "../hooks/useComposeDB";
import { useNavigate } from 'react-router-dom'

export function homeLoader({ params }) {
  return null
}

const Home = () => {
  const { compose, isAuthenticated } = useComposeDB();
  const navigate = useNavigate();

  // const [blessings, setBlessings] = useState([]);
  // const [cursor, setCursor] = useState(null);
  // async function loadBlessings() {
  //   const { data: { blessingIndex: { 
  //     pageInfo: { hasPreviousPage },
  //     edges: rawBlessings
  //   }}} = await compose.executeQuery(`
  //     query{
  //       blessingIndex(last:100${cursor ? `, before: "${cursor}"` : ''}){
  //         edges{
  //           cursor
  //           node{
  //             to {id}
  //             text
  //             author {id}
  //           }
  //         }
  //         pageInfo {
  //           hasPreviousPage
  //         }
  //       }
  //     }
  //   `)
  //   if (rawBlessings) {
  //     setBlessings(rawBlessings.reverse())
  //   } else {
  //     setBlessings([])
  //   }
  // }
  //
  //
  // useEffect(() => {
  //   loadBlessings()
  // }, [])


  return (
    <div>
      home
      {/*     { */}
      {/*       blessings.map((blessing) => ( */}
      {/*         <Blessing key={blessing.cursor} blessing={blessing} /> */}
      {/*       )) */}
      {/*     } */}
      {isAuthenticated && (
        <button onClick={() => navigate('/new-space')}>
          Click here to create a new space
        </button>
      )}
    </div>
  )
};

export default Home;


