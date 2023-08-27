import { FC } from "react";
import { Form, Input } from "antd";
import styles from "../../../styles/add.module.scss";


type TProps = {
  imputFileRef: any;
  imputFilePrivRef: any;
  handleChangeFile: any;
  handleChangeFilePriviu: any;
  imageUrl: string;
  onClickRemoveImage: () => void;
  setIsEdit: any;
  title: string;
  setTitle: any;
  setText: any;
  setTime: any;
  text: string;
  time: string;
};

export const FormInput: FC<TProps> = ({
  imputFileRef,
  imputFilePrivRef,
  handleChangeFile,
  imageUrl,
  onClickRemoveImage,
  setIsEdit,
  handleChangeFilePriviu,
  title,
  setTitle,
  setText,
  setTime,
  text,
  time,
}) => {
  return (
    <>
      <div className={styles.InputButtonBlock}>
        <button
          className="ButtonCategoryPage"
          onClick={() => imputFileRef.current.click()}
        >
          Загрузить Video
        </button>
        <input
          ref={imputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
        <button
          className="ButtonCategoryPage"
          onClick={() => imputFilePrivRef.current.click()}
        >
          Загрузить Priviu
        </button>
        <input
          ref={imputFilePrivRef}
          type="file"
          onChange={handleChangeFilePriviu}
          hidden
        />
        {imageUrl && (
          <button
            className="btnPorn"
            color="error"
            onClick={onClickRemoveImage}
          >
            Удалить
          </button>
        )}
      </div>

      <Form.Item name={["title", "title"]} rules={[{ required: true }]}>
        <h2>Title: {title}</h2>
        <Input
          placeholder="Ведите title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name={["description", "description"]}
        rules={[{ required: true }]}
      >
        <h2>Description xi</h2>
        <Input.TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ведите description"
        />
        <h2>Video time!</h2>
        <Input.TextArea
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Ведите time video in min"
        />
      </Form.Item>

      <button className="btnNext" onClick={() => setIsEdit(false)}>
        Далее
      </button>
    </>
  );
};

export default FormInput;
