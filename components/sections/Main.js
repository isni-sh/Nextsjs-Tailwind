import SVG from 'react-inlinesvg'
import Footer from './Footer'
import { Fade } from 'react-awesome-reveal'

export default function Main() {
  return (
    <>
      {/* Section 2 */}
      <div className="grid gird-cols-1 md:grid-cols-2 mt-10 md:my-10">
        <div>
          <SVG src="/svg/section2.svg" className="w-full 3xl:w-4/6 ml-auto h-full" alt="" />
        </div>
        <Fade>
          <div className="px-4 py-14 md:ml-10">
            <SVG src="/svg/greenImg.svg" alt="" />
            <h2 className="text-4xl lg:w-4/6 pt-4 text-blue-900">
              The easiest way of building great products
            </h2>
            <p className="pt-2 pb-4 text-sm md:text-base lg:w-5/6 2xl:w-10/12 text-blue-800">
              Our platform is powered by a highly trained neural network on software development.
              All you have to do is give Neuronic some instructions and it instantly does the rest
              of the work, you always have full control of the code and can easily adapt anything
              according to your needs.
            </p>
            <p style={{ color: '#7456FF' }} className="text-sm md:text-sm">
              <a href="#">Learn more about our system →</a>
            </p>
          </div>
        </Fade>
      </div>
      <div
        className="w-full py-20"
        style={{
          background: 'linear-gradient(285deg, rgba(235,245,245,1) 0%, rgba(248,250,254,1) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Section 3 */}
        <div className="container " style={{ color: '#1C4269' }}>
          <div className="row items-center md:py-14 py-10">
            <div className="md:col-6 col-12 md:order-1 order-2">
              <Fade>
                <p className="text-sm md:text-md text-blue-500">POWERFUL GAINS AWAIT FOR YOU</p>
                <h2 className="text-3xl lg:text-5xl py-4 md:w-96 text-blue-900">
                  Automate your repetitive work
                </h2>
                <SVG src="/svg/line.svg" alt="" />
                <p className="text-sm md:text-base pt-5 pb-6 md:w-10/12 text-blue-800">
                  With Neuronic, we’re giving you a powerful and always-improving tool that helps
                  you automate from creating the project structure to writing and updating code,
                  keeping up with new updates and changes so you focus on innovation instead.
                </p>
                <button
                  className="w-40 h-9 nolt pak  rounded-sm shadow text-white text-xs md:text-sm bg-blue-500"
                  style={{
                    boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                  }}
                >
                  LEARN MORE →
                </button>
              </Fade>
            </div>
            <div className="md:col-6 col-12 md:order-2 order-1">
              <SVG src="/svg/image.svg" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>

        {/* Sectioin 4 */}
        <div className="container">
          <div className="row items-center md:py-14 py-10">
            <div className="md:col-6 col-12">
              <SVG src="/svg/image.svg" className="w-full h-full" alt="" />
            </div>
            <div className="md:col-6 col-12">
              <Fade>
                <p className="text-sm md:text-md text-blue-500">MAKE THE MOST OF YOUR TIME</p>
                <h2 className="text-3xl lg:text-5xl py-2 md:w-full text-blue-900">
                  Say hello to new capabilities
                </h2>
                <SVG src="/svg/line.svg" alt="" />
                <p className="text-sm md:text-base pt-5 pb-6 md:w-10/12 text-blue-800">
                  We’ve built a super intelligent machine for you that already knows the best
                  practices and is capable of coding bug-free everything you’ve instructed it to do,
                  no more time wasting on fixing flaws anymore.
                </p>
                <button
                  className="w-40 h-9 rounded-sm shadow text-white text-xs md:text-sm bg-blue-500"
                  style={{
                    boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                  }}
                >
                  LEARN MORE →
                </button>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#0A131A' }} className="py-20">
        {/* BLUE SECTIONS  */}
        {/* Section 5 */}
        <div className="container text-white">
          <div className="row py-12 text-center">
            <div className="col-12 lg:col-6">
              <div
                className="border rounded-sm flex justify-center items-center"
                style={{ height: '380px' }}
              >
                <p>VIDEO SIDE BY SIDE</p>
              </div>
              <p className="py-1">Manual coding</p>
            </div>
            <div className="col-12 lg:col-6">
              <div
                className="border rounded-sm flex justify-center items-center"
                style={{ height: '380px' }}
              >
                <p>VIDEO SIDE BY SIDE</p>
              </div>
              <SVG src="/svg/ic_logo_white.svg" alt="" className="mx-auto my-2" />
            </div>
          </div>
        </div>
        {/* Section 6 */}
        <div className="container text-white">
          <div className="row py-12">
            <div className="col-12">
              <Fade>
                <h2 className="text-3xl lg:text-5xl md:w-1/2">Designed for faster innovation</h2>
                <SVG src="/svg/lineBottom.svg" alt="" className="my-4 " />
                <p
                  className="md:w-10/12 text-sm md:text-base text-blue-800"
                  style={{ color: '#536475' }}
                >
                  Software has been at the core of global innovation and many efforts are being made
                  for making it easier to develop. Our approach is a combination of machine
                  capabilities and human instructing as the best way to accelerate the development
                  of great and innovative products around the world.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div className="w-full" style={{ backgroundColor: '#F9FbFD' }}>
        <div className="container text-white pt-36">
          <div className="row md:text-center items-center rounded-none md:rounded-md py-14 bg-blue-500">
            <div className="col-12">
              <h2 className="text-3xl lg:text-4xl py-5 ">
                Ready to start building with Neuronic ?
              </h2>
              <p className="mx-auto md:w-1/2 text-sm md:text-md pb-2 ">
                Create a free account below with a 14-day-trial and minimal information required, or
                get in touch with us at anytime if you need help.
              </p>
              <p className="text-xs" style={{ color: '#FDFF9E' }}>
                ✓ No payment required ✓ 24/7 Support team avaliable ✓ No software installation
                needed
              </p>
              <div className="py-5 flex justify-center">
                <button
                  className="shadow rounded-sm ml-1 text-xs md:text-sm text-blue-900"
                  style={{
                    backgroundColor: '#fff',
                    color: '#101227',
                    width: '216px',
                    height: '41px',
                    boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                  }}
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-36" style={{ marginBottom: '-60px' }}>
          <hr className="border-gray-300" />
        </div>
        <Footer />
      </div>
    </>
  )
}
