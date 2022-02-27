import Container from '../../Components/common/Container'

export default function Contact() {
	return (
		<Container>
		<div className="my-20">
			<form className="mx-auto w-full max-w-lg">
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
							htmlFor="grid-first-name"
						>
							First Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							placeholder="Jane"
						/>

					</div>
					<div className="w-full md:w-1/2 px-3">
						<label
							className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
							htmlFor="grid-last-name"
						>
							Last Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							placeholder="Doe"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
							htmlFor="grid-password"
						>
							E-mail
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="email"
							type="email"
						/>

					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
							htmlFor="grid-password"
						>
							Message
						</label>
						<textarea
							className=" no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
							id="message"
							defaultValue={""}
						/>

					</div>
				</div>
				<div className="flex items-center justify-center ">
					<div className="mx-auto ">
						<button
							className="shadow bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							type="button"
						>
							Send
						</button>
					</div>
				</div>
			</form>
		</div>
		</Container>
	)
}
