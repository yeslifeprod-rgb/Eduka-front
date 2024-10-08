import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { userCardInterface } from "../../services/interfaces/user";

interface CardEventPropsInterface {
  user: userCardInterface;
}

export default function UserCard(props: CardEventPropsInterface) {
  const { user } = props;
  return (
    <article className="flex flex-col items-center gap-3 pb-2 m-8">
      <Link to={`/search_by_parent_detail/${user.id}`} state={{ user }}>
        <Avatar src={user.profil_picture} sx={{ width: 112, height: 112 }} />
      </Link>

      <p>{`${user.firstname} ${user.lastname}`}</p>
    </article>
  );
}
