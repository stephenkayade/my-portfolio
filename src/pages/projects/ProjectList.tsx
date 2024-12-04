import { MouseEvent, useState } from 'react'
import { ProjectsData } from '../../components/mocks'
import SideNav from './SideNav'

const ProjectList = () => {

  const [data, setData] = useState<any>({})
  const [show, setShow] = useState<boolean>(false)

  const toggleNav = (e: MouseEvent<HTMLElement>, data: any) => {

    if (e) e.preventDefault()

    if (data) {
      setData(data)
    }

    setShow(!show)

  }

  return (
    <>

      <div className="image-gallery grid gap-4 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 md:grid-cols-2">

        {
          ProjectsData.map((project) => (

            <div onClick={(e) => toggleNav(e, project)} key={project.id} className="min-h-96 rounded-lg bg-white content bg-no-repeat bg-contain bg-center" style={{ backgroundImage: `url(${project.img})` }}>

              <div className='inner px-5 pb-8'>

                <div>

                  <h3 className='text-white text-xl font-bold'>{project.title}</h3>

                  <p className='text-white text-sm font-light block text-wrap pt-3 mb-3.5'>{project.headline}</p>

                  {
                    project.tags.map((tag, index) => (
                      <div key={index} className='inline-flex flex-wrap'>
                        <span className={`${project.tags.length > 4 ? 'mb-2' : ''} mr-3 rounded-full bg-[#020a13]/40 px-2 py-px text-xs font-light text-white outline-offset-2 outline outline-slate-600`}>{tag}</span>
                      </div>
                    ))
                  }

                </div>

              </div>
              
            </div>

          ))
        }


      </div>


      <SideNav
        data={data}
        isShow={show}
        closeModal={toggleNav}
      />
    </>
  )
}

export default ProjectList