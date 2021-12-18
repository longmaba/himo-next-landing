/** @jsxImportSource @emotion/react */
import { styles } from './styles';

export const Member = ({ img, name, job }) => {
  return (
    <div css={styles.container}>
      <img src={img} alt="" />
      <div css={styles.name}>{name}</div>
      <div css={styles.job}>{job}</div>
    </div>
  );
};
