

// Generic higher-order function
// takes a any function as an argument
// returns a function with custom loging 
export function withDebug<T extends (...args: any[]) => any>(fn: T) {

	return (...args: Parameters<T>): ReturnType<T> => {
		if (DEBUG) console.log(`[DEBUG] Calling ${fn.name} with`, args);

		const start = performance.now();
		const result = fn(...args);
		const end = performance.now();
		const duration = (end - start).toFixed(2);

		if (DEBUG) {
			console.log(`[DEBUG] ${fn.name} returned`, result);
			console.log(`[DEBUG] ${fn.name} took ${duration}ms\n`);
		}

		return result;
	};
}




// Global debug flag — toggle this anywhere in your code
let DEBUG = false;
export function setDebug(value: boolean) {
	DEBUG = value;
}


function slowAdd(a: number, b: number) {
	for (let i = 0; i < 1e7; i++) {} // simulate heavy work
	return a + b;
}

const debugAdd = withDebug(slowAdd);

setDebug(true);

debugAdd(5, 6);
