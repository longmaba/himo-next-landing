/** @jsxImportSource @emotion/react */
import { styles } from './styles';

export const Partner = ({ img }) => {
  return (
    <div css={styles.container}>
      <img src={img} alt="" />
    </div>
  );
};
