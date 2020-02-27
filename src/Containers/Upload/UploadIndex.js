import './upload-index.scss';
import React, { useReducer, useState } from 'react';

import { POST_IMAGE_UPLOAD_API_V1_URL } from "../../endpoints/post-image-upload.endpoint";

import appReducer, { appDefaultState } from "../../lib/redux/modules/app/app.reducer";
import ApolloUploadClient from "../../lib/graphql/client/ApolloUploadClient";

import postImageUploadService from "../../lib/services/post-image-upload.service";

import RootDispatchContext from "../../hooks/contexts/app/root-dispatch.ctx";
import RootStateContext from "../../hooks/contexts/app/root-state.ctx";

import Header from "../../Components/Header/Header.Index";

function UploadIndex(props) {
	let files = [];
	const [state, dispatch] = useReducer(appReducer, appDefaultState);
	// const [files, setFiles] = useState([]);

	const postImageUploadClient = new ApolloUploadClient({
		uri: POST_IMAGE_UPLOAD_API_V1_URL
	});

	function onFilesSelect(event) {
		Array.from(event.target.files).forEach((file) => {
			files.push(file);
		});
	}

	function uploadFiles() {

		postImageUploadService(postImageUploadClient, "hksjfhskjf", { files: files })
			.then((resp) => {
				console.log(resp);
			})
			.catch((error) => {
				console.log(error);
			});
	}


	return (
		<RootDispatchContext.Provider value={dispatch}>
			<RootStateContext.Provider value={state}>
				<Header />
				<form>
					<label>Upload files</label>
					<br />
					<input
						multiple
						type="file"
						onChange={onFilesSelect}
					/>
					<br />
					<button
						type="button"
						onClick={uploadFiles}
					>
						Upload
					</button>
				</form>
			</RootStateContext.Provider>
		</RootDispatchContext.Provider>
	);
}

export default UploadIndex;
