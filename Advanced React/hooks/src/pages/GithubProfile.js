import React, { useEffect, useState } from 'react';

function GithubProfile() {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState("sagarsuryakantwaghmare");

    const fetchProfile = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            setInfo(data);
            setError(null); // Clear any previous errors
        } catch (err) {
            setError(err.message);
            setInfo(null); // Clear previous info on error
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    const css = {
        container: {
            fontFamily: "'Roboto', sans-serif",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#333',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: '50px auto',
            textAlign: 'center',
            color: '#EEE',
        },
        avatar: {
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            marginBottom: '20px',
            border: '2px solid #0366d6',
        },
        title: {
            fontSize: '24px',
            color: '#EEEEEE',
            margin: '10px 0',
        },
        subTitle: {
            fontSize: '18px',
            color: '#aaa',
            margin: '5px 0',
        },
        bio: {
            fontSize: '16px',
            color: '#ccc',
            fontStyle: 'italic',
            margin: '10px 0',
        },
        link: {
            color: '#0366d6',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '10px',
        },
        stats: {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            margin: '20px 0',
        },
        statBox: {
            backgroundColor: '#555',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            color: '#EEE',
        },
        error: {
            color: 'red',
            fontSize: '16px',
        },
        loading: {
            color: '#EEE',
            fontSize: '18px',
        },
        input: {
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
            fontSize: '16px',
        },
        button: {
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#0366d6',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
        },
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontFamily: "'Roboto', sans-serif" }}>
                Github Profile Info Getter
            </h1>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <input
                    type="text"
                    placeholder="Enter your GitHub username"
                    value={user}
                    onChange={handleInputChange}
                    style={css.input}
                />
                <button onClick={fetchProfile} style={css.button}>
                    Get Info
                </button>
            </div>
            {error && <p style={css.error}>{error}</p>}
            {info ? (
                <div style={css.container}>
                    <img alt="Avatar" src={info.avatar_url} style={css.avatar} />
                    <h1 style={css.title}>{info.login}</h1>
                    <div style={css.stats}>
                        <div style={css.statBox}>Followers: {info.followers}</div>
                        <div style={css.statBox}>Following: {info.following}</div>
                    </div>
                    <h3 style={css.subTitle}>Bio:</h3>
                    <p style={css.bio}>{info.bio || "No bio available"}</p>
                    <a
                        href={info.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={css.link}
                    >
                        View GitHub Profile
                    </a>
                </div>
            ) : (
                <p style={css.loading}>Loading...</p>
            )}
        </div>
    );
}

export default GithubProfile;
