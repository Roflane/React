import React, {useEffect, useState} from "react";
import {fetchEpisodes} from "../api.ts";
import {Episode} from "../types.ts";

const EpisodesPage: React.FC = () => {
    const [episodes, setEpisodes] = useState<Episode[]>([])

    useEffect(() => {
        const loadEpisodes = async () => {
            try {
                const data = await fetchEpisodes(10);
                setEpisodes(data);
            } catch (err) {
                throw err;
            }
        }
        loadEpisodes()
    }, [])

    useEffect(() => {
        console.log(episodes);
    }, [episodes]);

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-400">
                Episodes
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {episodes.map((episode) => (
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
                            {episode.Title}
                        </h2>

                        <p className="text-gray-300 text-sm mt-2">
                            ⭐ {episode.imdbRating}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default EpisodesPage;