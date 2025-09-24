import Link from "next/link";

export default function studentInfo() {
  return (
    <div>
      <p>Name: Abdulrahman-Nasser</p>
      <p>
        GitHub Repo:{" "}
        <Link href="https://github.com/dhom10/cprg306">
          cprg306-assignments
        </Link>
      </p>
    </div>
  );
}