import image from './images/bg-pattern-card.svg'
import photo from './images/image-victor.jpg'

function App() {
  return (
    <div className=' font-kumbh-sans text-lg bg-white w-fit rounded-2xl shadow-2xl shadow-Very-dark-desaturated-blue'>
      <header className=''>
        <img className=' rounded-t-2xl' src={image} alt="background pattern" />
      </header>
      <main className=' flex flex-col  text-center cursor-default'>
        <div className='flex justify-center'>
          <img className=' border-4 border-white border-solid rounded-full -translate-y-12 absolute hover:scale-125  hover:-translate-y-16 duration-700 ease-in-out' src={photo} alt="profile pic" />
        </div>
       <div className='pt-16 pb-6'>
        <h1 className=' text-Very-dark-desaturated-blue font-bold'>Victor Crest <span className=' font-normal text-Dark-gray hover:text-Dark-cyan hover:font-bold '>26</span></h1>
        <p className=' text-Dark-grayish-blue'>London</p>
       </div>
        <hr className=' border-Dark-gray opacity-50 w-full' />
        <div className=' flex justify-evenly py-5'>
          <div>
            <p className='font-bold text-Very-dark-desaturated-blue'>80k</p>
            <p className=' text-Dark-grayish-blue text-sm'>Followers</p>
          </div>
          <div>
            <p className='font-bold text-Very-dark-desaturated-blue'>803k</p>
            <p className='text-Dark-grayish-blue text-sm'>Likes</p>
          </div>
          <div>
            <p className='font-bold text-Very-dark-desaturated-blue'>1.4k</p>
            <p className='text-Dark-grayish-blue text-sm'>Photos</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
