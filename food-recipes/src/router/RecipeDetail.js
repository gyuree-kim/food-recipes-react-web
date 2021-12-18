import React from "react";
import { useParams } from "react-router-dom";
import PrimarySearchAppBar from "../Components/Navbar/TopNavbar";
import StandardImageList  from "../Components/RecipeImage/RecipeImage"

export default function FoodDetail() {
    // path에 " ":parameter " 로 선언되어있다면 useParams() hook으로 데려올 수 있습니다.
    // ex:) <Route path="/detail/:detailId ... />"
    let { detailId } = useParams();

    const [postId, setPostId] = useState("")

    useEffect(() => {
      async function getPostId() {
        const postList = await getPost();
        //setPostId(postList[0].postId)

        setPostId(postList)
      }

      getPostId();

      return;
    }, [setPostId])

    var detailPost = postId.forEach(
        function(x) {
            return x.postId == detailId;
        }
    )
  
    return (
        <center>
            <StandardImageList></StandardImageList>
            <div className="div_middle">{detailPost.postName}</div>
        </center>
    )
  }