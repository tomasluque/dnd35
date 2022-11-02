export default function Loader({ show }) {
    return show ? (
        <div className="loader h-12 w-12 animate-spin rounded-full border-8 border-gray-400 border-t-blue-400"></div>
    ) : null;
}
