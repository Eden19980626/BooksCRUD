import { useState } from 'react';
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div>
      <form className='p-5 flex justify-center gap-3' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='輸入想新增的書'
          className='input w-full max-w-xs input-bordered'
          value={title}
          onChange={handleChange}
        />
        <button className='btn'>新增書本</button>
      </form>
    </div>
  );
}
export default BookCreate;
