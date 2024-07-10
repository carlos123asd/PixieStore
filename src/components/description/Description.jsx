export default function Description({description, alt}){
    return <>
        <div className="description">
            <p>
                {description === null ? alt: `${description}\n${alt}`}
            </p>
        </div>
    </>
}