export default function MessageContainer() {
    return (
        <div
            className="flex-1 overflow-y-auto rounded-xl bg-violet-950 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
        >
            <div className="flex flex-row px-2 py-4 sm:px-4">
                <img
                    className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                    src="https://dummyimage.com/256x256/363536/ffffff&text=U"
                />

                <div className="flex max-w-3xl text-slate-100 items-center">
                    <p>Explain quantum computing in simple terms</p>
                </div>
            </div>
            <div
                className="mb-4 flex rounded-xl bg-violet-900 px-2 py-6 dark:bg-slate-900 sm:px-4"
            >
                <img
                    className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                    src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
                />

                <div className="flex max-w-3xl text-slate-100 items-center rounded-xl">
                    <p>
                        Certainly! Quantum computing is a new type of computing that relies on
                        the principles of quantum physics. Traditional computers, like the one
                        you might be using right now, use bits to store and process information.
                        These bits can represent either a 0 or a 1. In contrast, quantum
                        computers use quantum bits, or qubits.<br /><br />
                        Unlike bits, qubits can represent not only a 0 or a 1 but also a
                        superposition of both states simultaneously. This means that a qubit can
                        be in multiple states at once, which allows quantum computers to perform
                        certain calculations much faster and more efficiently
                    </p>
                </div>
            </div>
            <div className="flex px-2 py-4 sm:px-4">
                <img
                    className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                    src="https://dummyimage.com/256x256/363536/ffffff&text=U"
                />

                <div className="flex max-w-3xl text-slate-100 items-center">
                    <p>What are three great applications of quantum computing?</p>
                </div>
            </div>
            
        </div>
    )
}
