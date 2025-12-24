import React, {useEffect, useState} from "react";
import {fetchEpisodeDetails} from "../api.ts";
import {EpisodeDetails} from "../types.ts";

const EpisodesDetailsPage: React.FC = () => {
    const [episodeDetails, setEpisodeDetails] = useState<EpisodeDetails[]>([])

    useEffect(() => {
        const loadEpisodes = async () => {
            try {
                const data = await fetchEpisodeDetails(10);
                setEpisodeDetails(data);
            } catch (err) {
                throw err;
            }
        }
        loadEpisodes()
    }, [])

    useEffect(() => {
        console.log(episodeDetails);
    }, [episodeDetails]);

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-400">
                Episodes
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {episodeDetails.map((episode) => (
                    <div
                        key={episode.Episode}
                        className="bg-gray-800 rounded-xl p-4 border border-gray-700"
                    >
                        <img
                            src={episode.Poster}
                            alt={episode.Title}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />

                        <h2 className="text-xl font-bold text-green-400">
                            Title: {episode.Title}
                        </h2>

                        <h2 className="text-xl text-yellow-400">
                            Runtime: {episode.Runtime}
                        </h2>

                        <h2 className="text-xl text-purple-400">
                            Genre: {episode.Genre}
                        </h2>

                        <p className="text-gray-300 text-sm mt-2">
                            {episode.Plot}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default EpisodesDetailsPage;