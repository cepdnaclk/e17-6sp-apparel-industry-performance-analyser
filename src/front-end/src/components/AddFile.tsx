import { ChangeEvent, FunctionComponent } from "react";

interface AddFileProps {
  onFileSelected(e: ChangeEvent<HTMLInputElement>): void;
}

const AddFile: FunctionComponent<AddFileProps> = (props) => {
  return (
    <div>
      <h2>Add File</h2>
      <input
        type="file"
        accept="xlsx"
        multiple={false}
        onChange={(e) => props.onFileSelected(e)}
      />
    </div>
  );
};

export default AddFile;
