import { useDispatch } from "react-redux";
// import { deleteProduct } from '../../store/sounds';

const SoundDetail = ({ id, name, content, userId, playlistId, file }) => {
  const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(deleteProduct(id));
  // };
  return (
    <div className="sound-detail">
      <span className="sound-name">{name}</span>
      <span>{content}</span>
      <span>{userId}</span>
      <span>{playlistId}</span>
      <span>{file}</span>
    </div>
  );
};
export default SoundDetail;
