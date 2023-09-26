import React from "react";
interface ProfileProps {
    type?: "square" | "rounded";
    variant?: "medium" | "large";
    name?: string;
    getValue?: (imageName: string, imagePath: string) => void;
}
declare const Profile: React.FC<ProfileProps>;
export default Profile;
